import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';
import { useSelector } from 'react-redux';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from '../redux/selectors';
import Loader from '../components/Loader/Loader';
import ExchangeInfo from '../components/ExchangeInfo/ExchangeInfo';

const Home = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const exchangeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!exchangeInfo && !isError && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
        {isLoading && <Loader />}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
      </Container>
    </Section>
  );
};

export default Home;
