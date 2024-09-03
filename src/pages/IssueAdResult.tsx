import AdInfoTable from '../components/AdInfoTable';
import arrowLeft from '../assets/arrow-left.svg';
import ReviewAdNumber from '../components/ReviewAdNumber';
import ReviewAdResult from '../components/ReviewAdResult';
import Button from '../components/Button';

const IssueAdResult = () => {
  return (
    <main className="IssueAdResult">
      <article className="IssueAdResult__wrapperLeft">
        <img src={arrowLeft} alt="뒤로가기 화살표" className="IssueAdResult__wrapperLeft_arrow" />
        <div className="IssueAdResult__wrapperLeft_contents">
          <ReviewAdNumber adNumber="A12345" />
          <AdInfoTable title1="상품명" title2="광고주" content1="명작수" content2="아모레퍼시픽 코리아" />
          <AdInfoTable title1="업종구분" title2="게재일" content1="식품/음료" content2="2024-07-26" />
          <AdInfoTable title1="담당자" title2="김민지" content1="최종수정자" content2="김철수" />
          <div className="IssueAdResult__wrapperLeft_contents_article">기사내용 (스크롤 테스트 완료)</div>
        </div>
      </article>
      <div className="middleBar"> </div>
      <article className="IssueAdResult__wrapperRight">
        <div className="IssueAdResult__wrapperRight_contents">
          <div className="IssueAdResult__wrapperRight_contents_title">
            <ReviewAdResult reviewNumber={3} detailSpan="광고 수정 판정을 받은 광고입니다." />
            <div className="IssueAdResult__wrapperRight_contents_title_buttons">
              <Button type="button" state="default_white" width="5.417vw" height="4.815vh">
                임시 저장
              </Button>
              <Button type="button" state="default" width="5.417vw" height="4.815vh">
                다음
              </Button>
            </div>
          </div>
          <div className="IssueAdResult__wrapperRight_contents_resultBox">여기 결과 박스들</div>
        </div>
      </article>
    </main>
  );
};

export default IssueAdResult;
