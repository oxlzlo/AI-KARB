import { useNavigate } from 'react-router-dom';
import Table, { EmpData } from '../../components/Common/Table';
import SearchBar from '../../components/Common/SearchBar';
import Filter from '../../components/Common/Filter';
import Calendar from '../../components/Common/Calendar';

const ManageEmp = () => {
  const navigate = useNavigate();

  const handleRowClick = (rowData: EmpData) => {
    navigate(`/employee/${rowData.사원번호}`, { state: rowData });
  };

  return (
    <div className="manageEmp-wrapper">
      <SearchBar>
        <Filter />
        <Calendar />
      </SearchBar>
      <Table
        columns={[
          { name: '번호', width: '6.25vw', columnHeight: '60px', rowHeight: '64px' },
          { name: '사원번호', width: '10.417vw' },
          { name: '작업자', width: '10.417vw' },
          { name: '전체작업', width: '12.5vw' },
          { name: '미완료건', width: '12.5vw' },
          { name: '완료건', width: '12.5vw' },
          { name: '작업진척도', width: '17.708vw' },
        ]}
        data={[
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '70%',
          },
          {
            번호: 2,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 8,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 11,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 25,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 321,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 155,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1992,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 22451,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
        ]}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default ManageEmp;
