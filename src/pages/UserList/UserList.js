import { useEffect, useMemo, useState } from "react";
import Header from "../../share_components/Header/Header";
import "./UserList.scss";
import Pagination from "../../share_components/Pagtination/Pagtination";
import { getAllUsers } from "../../services/appServices";
import Loading from "../../share_components/Loading/Loading";

let PageSize = 10;

function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState({ results: [] });
  const [isLoad, setIsLoad] = useState(false);
  const [sort, setSort] = useState(false);

  const handleUserList = async () => {
    document.title = "Users list";

    // get user data from api
    setIsLoad(true);
    let data = await getAllUsers();
    console.log(data);
    if (data === null) {
      return;
    }
    setList(data.data);
    setIsLoad(false);
  };

  useEffect(() => {
    handleUserList();
  }, []);

  // user data at one page include sorting
  const currentTableData = useMemo(() => {
    if (list.results === null) return [];
    if (isLoad) return [];
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (sort) {
      const sortedUsers = [...list.results].sort((a, b) => {
        const fullNameA =
          `${a.login.username} ${a.name.title} ${a.name.first} ${a.name.last}`.toLowerCase();
        const fullNameB =
          `${b.login.username} ${b.name.title} ${b.name.first} ${b.name.last} `.toLowerCase();

        if (fullNameA < fullNameB) return -1;
        if (fullNameA > fullNameB) return 1;
        return 0;
      });
      return sortedUsers.slice(firstPageIndex, lastPageIndex);
    }
    return list.results.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, isLoad, sort]);

  const handleSort = (event) => {
    const status = event.target.value;
    if (status === "2") setSort(true);
    else setSort(false);
  };
  return (
    <div>
      <Header />
      {isLoad && (
        <div className="loading-animation">
          <Loading />
        </div>
      )}
      <div className="user-container">
        <div className="user-content">
          <div className="user-title">List of Users</div>
          {list.Data !== null ? (
            <div className="user-table">
              <div className="section">
                <div className="filter">
                  <div className="filter-form">
                    <div className="col1">
                      <div className="search-button" type="submit">
                        Sorted by:
                      </div>
                    </div>
                    <div className="col1">
                      <select
                        id="sort"
                        className="form-select"
                        type="text"
                        onChange={handleSort}
                      >
                        <option value="0" disabled>
                          Sorted by
                        </option>
                        <option value="1">Default</option>
                        <option value="2">Username</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="table-content">
                  <div className="top-content">
                    <div className="table-header">
                      <div className="row">
                        <div className="row-data">#</div>
                        <div className="row-data1">Full Name</div>
                        <div className="row-data1">Username</div>
                        <div className="row-data1">Thumbnail</div>
                        <div className="row-data1">Detail</div>
                      </div>
                    </div>
                    <div className="table-body">
                      {currentTableData.map((item, index) => {
                        return (
                          <div className="body-row" key={index}>
                            <div className="body-row-data">
                              <span>{index + 1}</span>
                            </div>
                            <div className="body-row-data1">
                              <span>
                                {item.name.title +
                                  " " +
                                  item.name.first +
                                  " " +
                                  item.name.last}
                              </span>
                            </div>

                            <div className="body-row-data1">
                              <span>{item.login.username}</span>
                            </div>

                            <div className="body-row-data2">
                              <a target="blank">
                                {item.picture.medium.toString()}
                              </a>
                            </div>
                            <div className="body-button">
                              <a
                                className="infor-link"
                                href="/details"
                                role="button"
                              >
                                Detail
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="pagination-container">
                      <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={
                          list.results === null ? 0 : list.results.length
                        }
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="notuser">Empty</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
