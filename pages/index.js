import ImageResizer from '../components/ImageResizer';
import ImageCropper from '../components/ImageCropper';
import ImageFilters from '../components/ImageFilters';
import VideoPlayer from '../components/VideoPlayer';
import VideoThumbnails from '../components/VideoThumbnails';
import VideoSpeedController from '../components/VideoSpeedController';

export default function Home() {
  return (
    <div>
      <h1>Image and Video Manipulation</h1>
      
      <ImageResizer />
      <hr />
      <ImageCropper />
      <hr />
      <ImageFilters />
      <hr />
      <VideoPlayer />
      <hr />
      <VideoThumbnails />
      <hr />
      <VideoSpeedController />
    </div>
  );
}
