import React, { useEffect, useState } from 'react';
import SearchBar from '../components/Common/SearchBar';
import SearchInput from '../components/Common/SearchInput';
import Filter from '../components/Common/Filter';
import TagFilter from '../components/Common/TagFilter';
import Calendar from '../components/Common/Calendar';
import Table from '../components/Common/Table';
import totalTask from '../assets/icon-totalTask.svg';
import doneTask from '../assets/icon-doneTask.svg';
import notDoneTask from '../assets/icon-notDoneTask.svg';
import ReviewTag from '../components/Common/ReviewTag';
import instance from '../api/apiConfig';
import Spinner from '../components/Common/Spinner';

interface Advertisement {
  adId: string;
  media: string[];
  category: string[];
  productName: string;
  advertiser: string;
  state: boolean;
  issue: boolean;
}

interface TaskList {
  totalElements: number;
  advertisementList: Advertisement[];
}

const MyTasks = () => {
  const [taskData, setTaskData] = useState<TaskList | null>(null);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const requestData = {
          cursorInfo: {
            cursorState: true,
            cursorId: 'A00001',
          },
          keyword: '검수완료',
          period: '2024-09-1',
          state: true,
          issue: true,
          media: ['동아일보'],
          category: ['가정용품'],
        };

        const response = await instance.post('/api/v1/user/my-task', requestData);

        setTaskData(response.data.data.taskList);
      } catch {
        console.log('에러');
      }
    };

    fetchTaskData();
  }, []);

  if (!taskData) {
    return <Spinner />;
  }

  return (
    <div className="myTasks">
      <div className="myTasks__container">
        <div className="myTasks__container__tasksBox">
          <div className="myTasks__container__tasksBox__tasks">
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task__area">
                <div className="myTasks__container__tasksBox__tasks__task__area_title">전체 작업</div>
                <div className="myTasks__container__tasksBox__tasks__task__area_content">
                  {taskData.totalElements}건
                </div>
              </div>
              <img src={totalTask} alt="전체 작업 수" />
            </div>
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task__area">
                <div className="myTasks__container__tasksBox__tasks__task__area_title">완료건</div>
                <div className="myTasks__container__tasksBox__tasks__task__area_content">
                  {taskData.advertisementList
                    ? taskData.advertisementList.filter((task) => task.state === true).length
                    : 0}
                  건
                </div>
              </div>
              <img src={doneTask} alt="완료 작업 수" />
            </div>
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task__area">
                <div className="myTasks__container__tasksBox__tasks__task__area_title">미완료건</div>
                <div className="myTasks__container__tasksBox__tasks__task__area_content">
                  {taskData.advertisementList
                    ? taskData.advertisementList.filter((task) => task.state === false).length
                    : 0}
                  건
                </div>
              </div>
              <img src={notDoneTask} alt="미완료 작업 수" />
            </div>
          </div>
        </div>
        <SearchBar>
          <SearchInput placeholder="검색할거임" />
          <TagFilter tag1="전체" tag2="지적" tag3="비지적" />
          <TagFilter tag1="전체" tag2="검수" tag3="검수완료" />
          <Filter />
          <Calendar />
        </SearchBar>

        <Table
          columns={[
            { name: '번호', width: '4.167vw' },
            { name: '고유번호', width: '6.25vw' },
            { name: '매체명', width: '12.5vw' },
            { name: '업종구분', width: '9.375vw' },
            { name: '상품명', width: '19.792vw' },
            { name: '광고주', width: '12.5vw' },
            { name: '진행상황', width: '8.333vw' },
            { name: '지적비지적', width: '9.375vw' },
          ]}
          data={
            taskData.advertisementList && taskData.advertisementList.length > 0
              ? taskData.advertisementList.map((task, index) => ({
                  번호: index + 1,
                  고유번호: task.adId,
                  매체명: task.media[0],
                  업종구분: task.category[0],
                  상품명: task.productName,
                  광고주: task.advertiser,
                  진행상황: (
                    <ReviewTag
                      size="large"
                      containerBg={task.state ? '#FFEDDA' : '#DEEEED'}
                      circleBg={task.state ? '#FFB566' : '#64ACA7'}
                      content={task.state ? '검수전' : '검수완료'}
                    />
                  ),
                  지적비지적: (
                    <ReviewTag
                      size="large"
                      containerBg={task.issue ? '#FDDFE6' : '#D5EFF8'}
                      circleBg={task.issue ? '#EB003B' : '#4B98B2'}
                      content={task.issue ? '지적' : '비지적'}
                    />
                  ),
                }))
              : []
          }
        />
      </div>
    </div>
  );
};

export default MyTasks;
