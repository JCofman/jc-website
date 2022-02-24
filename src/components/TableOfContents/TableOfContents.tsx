import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { FaListUl } from 'react-icons/fa';

import Divider from '../Divider';
import Heading from '../Heading';

const useIntersectionObserver = (
  setActiveId: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  const headingElementsRef: any = useRef({});

  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce(
        (map: Record<string, IntersectionObserverEntry>, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        },
        headingElementsRef.current
      );

      const visibleHeadings: Array<Element & { target: { id: string } }> = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => (getIndexFromId(a.target.id) > getIndexFromId(b.target.id)) as any
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px 0px 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

const StyledTableOfContentsNavigation = styled.nav`
  display: none;
  padding: 1.6rem;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 300px;
  font-family: 'Raleway', sans-serif;
  color: var(--color-text);
  background: var(--color-background);
  position: sticky;
  top: 70px;

  ${(props) => props.theme.xlarge} {
    display: flex;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-rendering: optimizelegibility;
    margin-bottom: 16px;
  }

  a {
    font-size: var(--font-size-sm);
    display: block;
    opacity: 0.8;
    text-decoration: none;
    transition: opacity 500ms ease 0s;
    margin-top: var(--margin-1);
    text-align: left;
  }

  a:hover,
  a:focus {
    color: var(--color-primary);
  }
`;

interface TableOfContentsItemProps {
  url: string;
  title: string;
  items?: Array<{ url: string; title: string }>;
}

interface TableOfContentsProps {
  items: Array<TableOfContentsItemProps>;
  className: string;
}

const TableOfContents = (props: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>();

  const { items, ...rest } = props;

  useIntersectionObserver(setActiveId);

  const flattenedItems = items.reduce<Array<TableOfContentsItemProps>>((prev, curr) => {
    if (Array.isArray(curr?.items)) {
      const { items, ...rest } = curr;
      return [...prev].concat([rest]).concat([...items]);
    }
    return [...prev, curr];
  }, []);

  return (
    <nav aria-label="table of contents for post" {...rest}>
      {items && items.length > 0 ? (
        <StyledTableOfContentsNavigation>
          <Heading appearance={`H2`}>
            <FaListUl></FaListUl> Table of contents
          </Heading>
          <Divider></Divider>
          {flattenedItems.map((item: TableOfContentsItemProps) => {
            const { url, title } = item;
            return (
              <a
                style={{
                  color:
                    url.toLowerCase() === `#${activeId?.toLowerCase()}`
                      ? 'var(--color-primary)'
                      : 'var(--color-text)',
                  fontWeight: url.toLowerCase() === `#${activeId?.toLowerCase()}` ? 800 : 600,
                }}
                key={url}
                href={url}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`${url}`)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {title}
              </a>
            );
          })}
        </StyledTableOfContentsNavigation>
      ) : null}
    </nav>
  );
};

export default TableOfContents;
