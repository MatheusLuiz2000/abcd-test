import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { getUsers } from '../../services/GitHubAPI';
import Loading from '../../components/Loading';

export default function Users() {
  const [data, setData] = useState([]);
  const [since, setSince] = useState(0);
  const [loader, setLoader] = useState(true);

  async function searchUsers() {
    setLoader(true);

    const search = await getUsers(since * 10);
    if (search.status !== 200) {
      return toast.error('Error to search users', {
        position: 'bottom-right',
      });
    }
    setLoader(false);

    return setData(search.data.data);
  }

  useEffect(() => {
    searchUsers();
  }, [since]);

  async function onChange(e) {
    const select = e.selected;
    setSince(select);
  }

  return (
    <div className="main">
      <h1 className="title">Users List</h1>
      {loader ? (
        <Loading />
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Login</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.login}</td>
                    <td>
                      <Link to={`/user/${item.login}`}>Go to User Details</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ReactPaginate
            pageCount={9999}
            initialPage={0}
            forcePage={since}
            pageRangeDisplayed={5}
            marginPagesDisplayed={0}
            disableInitialCallback
            onPageChange={onChange}
          />
        </>
      )}
    </div>
  );
}
