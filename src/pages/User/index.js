import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import ReactPaginate from 'react-paginate';
import { getUser, getRepoUser } from '../../services/GitHubAPI';
import Loading from '../../components/Loading';

export default function User(props) {
  const [data, setData] = useState('');
  const [pageRepo, setPageRepo] = useState(1);
  const [repo, setRepo] = useState('');
  const [loader, setLoader] = useState(true);

  async function searchUser() {
    const search = await getUser(props.match.params.user);

    if (search.status !== 200) {
      return toast.error(
        `Error to search the user ${props.match.params.user}`,
        {
          position: 'bottom-right',
        }
      );
    }

    return setData(search.data);
  }

  async function searchRepository() {
    const searchRepo = await getRepoUser(props.match.params.user, pageRepo);

    if (searchRepo.status === 200) {
      setRepo(searchRepo.data);
      return setLoader(false);
    }
  }

  useEffect(() => {
    searchUser();
  }, []);

  useEffect(() => {
    searchRepository();
  }, [pageRepo]);

  async function onChange(e) {
    const select = e.selected + 1;
    setLoader(true);
    setPageRepo(select);
  }

  return (
    <div className="main">
      <h1 className="title">User Details and Repo</h1>
      {!loader ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Login</th>
                <th>URL Perfil</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#{data.id}</td>
                <td>{data.login}</td>
                <td>
                  <a href={data.html_url} target="_blank">
                    {data.html_url}
                  </a>
                </td>
                <td>
                  {format(new Date(data.created_at), 'MM/dd/yyyy Hh:mm:ss')}
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>URL Repo</th>
              </tr>
            </thead>
            <tbody>
              {repo.map(item => {
                return (
                  <tr>
                    <td>#{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <a href={item.html_url} target="_blank">
                        {item.html_url}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ReactPaginate
            pageCount={9999}
            forcePage={pageRepo - 1}
            initialPage={0}
            pageRangeDisplayed={5}
            marginPagesDisplayed={0}
            onPageChange={onChange}
            disableInitialCallback
            eventListener="onClick"
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
