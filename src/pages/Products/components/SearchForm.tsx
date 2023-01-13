/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
import { FC } from 'react';
import { SearchCircleIcon } from '@heroicons/react/outline';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useThemeHook } from '../../../ThemeContext/ThemeProvider';
import { translate } from '../../../i18n';
import { RootState } from '../../../redux/Language/store';

interface ISearchFormProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchForm: FC<ISearchFormProps> = ({ query, setQuery }) => {
  const [theme] = useThemeHook();
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <form action='/search' className='search-form'>
      <div className='form-field with-icon'>
        <h5 className={theme ? 'text-light' : 'text-black'}>{translate('Search Products', language)}</h5>
        <InputGroup className='w-25'>
          <InputGroup.Text className={theme ? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}>
            <SearchCircleIcon className='h-6 w-6' />
          </InputGroup.Text>
          <FormControl
            placeholder={translate('Search Products', language)}
            value={query}
            onChange={e => setQuery(e.target.value)}
            className={theme ? 'bg-light-black text-light' : 'bg-light text-black'}
          />
        </InputGroup>
      </div>
    </form>
  );
};
export default SearchForm;

{ /* <Container className=''>
      <Row>
        <Col xs={10} md={7} lg={6} xl={4} className=''>
          <h5 className={theme ? 'text-light' : 'text-black'}>{translate('Search Products', language)}</h5>
          <InputGroup className=''>
            <InputGroup.Text className={theme ? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}>
              <SearchCircleIcon className='h-6 w-6' />
            </InputGroup.Text>
            <FormControl
              placeholder='Search'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className={theme ? 'bg-light-black text-light' : 'bg-light text-black'}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container> */ }
