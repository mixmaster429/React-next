import { Footer, Header } from '@components';
import Main from '@components/main/review';

const Review: React.FC = () => {
  return (
    <div className="review-page">
      <Header/>

      <Main/>

      <Footer/>
    </div>
  );
};

export default Review;
