import SearchBar from '../components/Common/SearchBar';
import Table from '../components/Common/Table';
import trash from '../assets/Icon-delete.svg';

const ManageUser = () => {
  return (
    <div className="manageUser">
      <div className="manageUser__container">
        <SearchBar />
        <Table
          columns={[
            { name: '번호', width: '4.167vw' },
            { name: '사원번호', width: '6.25vw' },
            { name: '이름', width: '6.25vw' },
            { name: '권한', width: '6.25vw' },
            { name: '아이디', width: '9.375vw' },
            { name: '연락처', width: '10.417vw' },
            { name: '이메일', width: '12.5vw' },
            { name: '회원가입일', width: '10.417vw' },
            { name: '최종로그인일', width: '10.417vw' },
            { name: '관리', width: '6.25vw' },
          ]}
          data={[
            {
              번호: 1,
              사원번호: 'A12345',
              이름: '김지후',
              권한: '작업자',
              아이디: 'dsdfse1234',
              연락처: '010-2939-0101',
              이메일: 'jung456@gmail.com',
              회원가입일: '2024-12-12 13:35',
              최종로그인일: '2024-12-12 13:35',
              관리: <img style={{ paddingLeft: '5px' }} src={trash} alt="회원삭제" />,
            },
            {
              번호: 1,
              사원번호: 'A12345',
              이름: '김지후',
              권한: '작업자',
              아이디: 'dsdfse1234',
              연락처: '010-2939-0101',
              이메일: 'jung456@gmail.com',
              회원가입일: '2024-12-12 13:35',
              최종로그인일: '2024-12-12 13:35',
              관리: <img style={{ paddingLeft: '5px' }} src={trash} alt="회원삭제" />,
            },
            {
              번호: 1,
              사원번호: 'A12345',
              이름: '김지후',
              권한: '작업자',
              아이디: 'dsdfse1234',
              연락처: '010-2939-0101',
              이메일: 'jung456@gmail.com',
              회원가입일: '2024-12-12 13:35',
              최종로그인일: '2024-12-12 13:35',
              관리: <img style={{ paddingLeft: '5px' }} src={trash} alt="회원삭제" />,
            },
            {
              번호: 1,
              사원번호: 'A12345',
              이름: '김지후',
              권한: '작업자',
              아이디: 'dsdfse1234',
              연락처: '010-2939-0101',
              이메일: 'jung456@gmail.com',
              회원가입일: '2024-12-12 13:35',
              최종로그인일: '2024-12-12 13:35',
              관리: <img style={{ paddingLeft: '5px' }} src={trash} alt="회원삭제" />,
            },
            {
              번호: 1,
              사원번호: 'A12345',
              이름: '김지후',
              권한: '작업자',
              아이디: 'dsdfse1234',
              연락처: '010-2939-0101',
              이메일: 'jung456@gmail.com',
              회원가입일: '2024-12-12 13:35',
              최종로그인일: '2024-12-12 13:35',
              관리: <img style={{ paddingLeft: '5px' }} src={trash} alt="회원삭제" />,
            },
            {
              번호: 1,
              사원번호: 'A12345',
              이름: '김지후',
              권한: '작업자',
              아이디: 'dsdfse1234',
              연락처: '010-2939-0101',
              이메일: 'jung456@gmail.com',
              회원가입일: '2024-12-12 13:35',
              최종로그인일: '2024-12-12 13:35',
              관리: <img style={{ paddingLeft: '5px' }} src={trash} alt="회원삭제" />,
            },
            {
              번호: 1,
              사원번호: 'A12345',
              이름: '김지후',
              권한: '작업자',
              아이디: 'dsdfse1234',
              연락처: '010-2939-0101',
              이메일: 'jung456@gmail.com',
              회원가입일: '2024-12-12 13:35',
              최종로그인일: '2024-12-12 13:35',
              관리: <img style={{ paddingLeft: '5px' }} src={trash} alt="회원삭제" />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ManageUser;
