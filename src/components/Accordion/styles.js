import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  width: 100%;
  transition: 0.3s;

  &:hover {
    background: #ff696d;
  }

  > h4 {
    line-height: 1.8rem;
    color: #fff;
    font-size: 0.9rem;
    margin-left: 0.5rem;
    margin-right: auto;
  }

  > svg {
    transition: transform 0.3s;

    &.open {
      transform: rotate(-180deg);
    }
  }
`;

const removeOverflow = keyframes`
  from { overflow: visible; }
  to { overflow: hidden; }
`;

const addOverflow = keyframes`
  from { overflow: hidden; }
  to { overflow: visible; }
`;

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;

  overflow: visible;
  animation: 0.5s ${addOverflow} cubic-bezier(1, 0, 1, 0);

  transition: max-height 0.5s cubic-bezier(1, 0, 1, 0);
  height: auto;
  max-height: 9999px;

  > ul > li::after {
    transition: opacity 0.5s cubic-bezier(1, 0, 1, 0);
    opacity: 1;
  }

  &.collapsed {
    > ul > li::after {
      transition: opacity 0.5s cubic-bezier(0, 1, 0, 1);
      opacity: 0;
    }

    max-height: 0;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);

    overflow: hidden;
    animation: 0.5s ${removeOverflow} cubic-bezier(0, 1, 0, 1);
  }
`;
