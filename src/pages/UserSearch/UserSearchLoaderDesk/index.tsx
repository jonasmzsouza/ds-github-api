import './styles.css';

import ContentLoader from 'react-content-loader';

const UserSearchLoaderDesk = () => (
  <div className="user-loader-desk">
    <ContentLoader
      width={700}
      height={300}
      viewBox="0 0 700 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
    >
      <rect x="0" y="8" rx="3" ry="3" width="2" height="283" />
      <rect x="0" y="8" rx="3" ry="3" width="640" height="2" />
      <rect x="640" y="8" rx="3" ry="3" width="2" height="283" />
      <rect x="0" y="289" rx="3" ry="3" width="640" height="2" />
      <rect x="45" y="42" rx="16" ry="16" width="274" height="216" />
      <rect x="365" y="41" rx="3" ry="3" width="231" height="29" />
      <rect x="385" y="91" rx="3" ry="3" width="178" height="6" />
      <rect x="390" y="113" rx="3" ry="3" width="102" height="7" />
      <rect x="385" y="139" rx="3" ry="3" width="178" height="6" />
      <rect x="390" y="162" rx="3" ry="3" width="102" height="7" />
      <rect x="385" y="189" rx="3" ry="3" width="178" height="6" />
      <rect x="390" y="210" rx="3" ry="3" width="102" height="7" />
      <rect x="385" y="235" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
  </div>
);

UserSearchLoaderDesk.metadata = {
  name: 'Sridhar Easwaran',
  github: 'sridhareaswaran',
  description: 'Events',
  filename: 'EventsLoader',
};

export default UserSearchLoaderDesk;
