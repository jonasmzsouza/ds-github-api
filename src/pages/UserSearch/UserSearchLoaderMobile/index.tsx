import './styles.css';

import ContentLoader from 'react-content-loader';

const UserSearchLoaderMobile = () => (
  <div className="user-loader-mobile">
    <ContentLoader
      width={280}
      height={700}
      viewBox="0 0 280 700"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
    >
      <rect x="0" y="8" rx="3" ry="3" width="2" height="430" />
      <rect x="0" y="8" rx="3" ry="3" width="280" height="2" />
      <rect x="278" y="9" rx="3" ry="3" width="2" height="430" />
      <rect x="0" y="437" rx="3" ry="3" width="280" height="2" />
      <rect x="40" y="35" rx="16" ry="16" width="200" height="158" />
      <rect x="25" y="230" rx="3" ry="3" width="231" height="29" />
      <rect x="45" y="275" rx="3" ry="3" width="178" height="6" />
      <rect x="50" y="295" rx="3" ry="3" width="102" height="7" />
      <rect x="45" y="315" rx="3" ry="3" width="178" height="6" />
      <rect x="50" y="335" rx="3" ry="3" width="102" height="7" />
      <rect x="45" y="355" rx="3" ry="3" width="178" height="6" />
      <rect x="50" y="375" rx="3" ry="3" width="102" height="7" />
      <rect x="45" y="395" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
  </div>
);

UserSearchLoaderMobile.metadata = {
  name: 'Sridhar Easwaran',
  github: 'sridhareaswaran',
  description: 'Events',
  filename: 'EventsLoader',
};

export default UserSearchLoaderMobile;
