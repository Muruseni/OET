
// Import the newly created component
import { Profile } from './components/Profile';
import {TeamCard} from './components/TeamCard';

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
      {/* Use the component and pass it the required props */}
      
      <Profile name="Your Name" role="Junior Developer" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <TeamCard name="Alice" role="Frontend Developer" />
      <TeamCard name="Bob" role="Backend Developer" />
      <TeamCard name="Charlie" role="UI/UX Designer" />
      <TeamCard name="Diana" role="Project Manager" />
      </div>

    </div>
  );
}