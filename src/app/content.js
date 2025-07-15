import ArrowBackButton from '@/components/ArrowBackButton';
import IdeaDetail from '../components/IdeaDetail';

function ContentPage() {
  return (
    <div className="bg-gray-100 min-h-screen pt-10 pb-20">
      <ArrowBackButton />
      <IdeaDetail />
    </div>
  );
}

export default ContentPage;