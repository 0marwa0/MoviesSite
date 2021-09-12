import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrNext, GrPrevious } from 'react-icons/gr';
// import { bookRemoved } from '../../Store/reducers/BookMarkReducer';
import { fetchPopularMovies } from '../../Store/reducers/PopularReducer';
import { fetchGenre } from '../../Store/reducers/GenreReducer';
import { imageUrl } from '../../Store/reducers/config';
import '../../shared/index.css';
import { auth, db } from '../../firebase';

function Index() {
  const [bookmarks, setBookmarks] = useState();

  const history = useHistory();
  const dispatch = useDispatch();
  // const popularMovies = useSelector((state) => state.bookMark.data);
  const moviesGenre = useSelector((state) => state.moviesGenre.data);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchGenre());
  }, [dispatch]);
  const data = bookmarks;
  const genre = moviesGenre || {};

  const getDetalis = (id) => {
    history.push(`/movie/${id}`);
  };
  const indexofLast = currentPage * perPage;
  const indexofFirst = indexofLast - perPage;

  const currentList = data ? data.slice(indexofFirst, indexofLast) : [];
  const totalPages = data && data.length / perPage;
  const onNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };
  const onPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((page) => page - 1);
    }
  };
  const onDelete = (id) => {
    auth.onAuthStateChanged((user) => {
      const bookmarkedRef = db
        .collection('bookmarks')
        .where('uid', '==', user.uid)
        .where('item.id', '==', id);
      // let unsubscribe;
      if (user) {
        bookmarkedRef.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => doc.ref.delete());

          // forEach((doc) => {
          //   console.log('ref');
          //   doc.ref.delete();
          // });
        });
        // bookmarkedRef
        //   .doc(id)
        //   .delete()
        //   .then(console.log('deleted'))
        //   .catch((err) => console.log(err));

        // onSnapshot((querySnapshot) => {
        //   setBookmarks(querySnapshot.docs);
        //   console.log(bookmarks)
        // });
      }
    });
  };
  useEffect(() => {
    // let unsubscribe;
    auth.onAuthStateChanged((user) => {
      const bookmarkedRef = db.collection('bookmarks');

      // let unsubscribe;
      if (user) {
        bookmarkedRef
          .where('uid', '==', user.uid)
          .get()
          .then((querySnapshot) => {
            // console.log(querySnapshot);
            setBookmarks(querySnapshot.docs);
          });

        // onSnapshot((querySnapshot) => {
        //   setBookmarks(querySnapshot.docs);
        //   console.log(bookmarks)
        // });
      }
    });
    // return () => unsubscribe();
  }, [onDelete]);

  return (
    <div className="gridhomepage">
      <div className="List">
        <div className="ListItems">
          <div>Poster</div>
          <div>Movie title</div>
          <div>Release date</div>
          <div>Rate</div>
          <div>Genre</div>
        </div>
        {currentList ? (
          currentList.map((item) => (
            <div key={item.data().item.id} className="ListItems">
              <img
                src={`${imageUrl}${item.data().item.poster_path}`}
                alt="movie"
              />
              <div
                onKeyDown={() => getDetalis(item.data().item.id)}
                onClick={() => getDetalis(item.data().item.id)}
                role="button"
                tabIndex="0"
              >
                {item.data().item.title}
              </div>
              <div> {item.data().item.release_date}</div>
              <div> {item.data().item.vote_average}</div>
              <div>
                {item.data().item.genre_ids.map((type, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={index}>
                    <span>{`${genre[type]}, `}</span>
                  </span>
                ))}
              </div>
              <div>
                <RiDeleteBinLine
                  color="red"
                  onClick={() => onDelete(item.data().item.id)}
                  cursor="pinter"
                />
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}

        <div className="pagination">
          <div />
          <div>
            <button type="button" onClick={() => onPrev()}>
              <GrPrevious color="orange" />
            </button>
            {currentPage}-{totalPages}
            <button type="button" onClick={() => onNext()}>
              <GrNext color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
