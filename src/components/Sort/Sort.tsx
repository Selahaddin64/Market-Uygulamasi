/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from 'styled-components';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useFilterContext } from '../../FilterContext/filter_context';
import { SortMenu } from './SortMenu';
import { SortButtons } from './SortButtons';
import { translate } from '../../i18n';
import { RootState } from '../../redux/Language/store';

interface ISortProps {
  lowestPrice: any;
  highestPrice: any;
  lowestRating: any;
  highestRating: any
}

const Sort: FC<ISortProps> = ({ lowestPrice, highestPrice, lowestRating, highestRating }) => {
  const { filteredProducts } = useFilterContext();
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <Wrapper>
      <SortButtons />
      <p>{filteredProducts.length} {translate('products found', language)}</p>
      <hr />
      <SortMenu lowestPrice={lowestPrice} highestPrice={highestPrice} lowestRating={lowestRating} highestRating={highestRating} />
    </Wrapper>
  );
};

export default Sort;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
  select {
    text-transform: capitalize;
  }
`;
