import React, { useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { fetchUpComingMovies } from '../../Store/reducers/UpComingReducer';
import { fetchVideo } from '../../Store/reducers/VideoReducer';

function Index() {
  const dispatch = useDispatch();
  const UpComingMovies = useSelector(
    (state) => state.upComingMovies.data.results
  );
  const isLoading = useSelector((state) => state.upComingMovies.status);
  const VideoKey = useSelector((state) => state.video.data.results);
  const id = UpComingMovies ? UpComingMovies[0] : '';

  const key = VideoKey ? VideoKey[0].key : '';
  useEffect(() => {
    dispatch(fetchUpComingMovies());
    dispatch(fetchVideo(id.id));
  }, [dispatch]);
  console.log(isLoading, id.id, 'wow');
  return (
    <div className="mostPopular">
      <ReactPlayer
        playing
        loop
        onProgress={() => <div>loading</div>}
        playIcon={() => <div>ss</div>}
        style={{ borderRadius: '30px', overflow: 'hidden' }}
        width="100%"
        controls
        forceAudiio
        onReady={() => console.log('on buffer')}
        url={`https://www.youtube.com/watch?v=${key}`}
      />
    </div>
  );
}
export default Index;
