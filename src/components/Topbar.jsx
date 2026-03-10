// src/components/Topbar.jsx

export default function Topbar({ search, setSearch }) {
  return (
    <div className="topbar">
      <div className="topbar__search">
        <span className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#90A1B9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M17.5 17.5001L13.9167 13.9167" stroke="#90A1B9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for guitar courses..."
        />
      </div>

      <div className="topbar__actions">
        <button className="topbar__icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
           <path d="M5 1.66675L2.5 5.00008V16.6667C2.5 17.1088 2.67559 17.5327 2.98816 17.8453C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8453C17.3244 17.5327 17.5 17.1088 17.5 16.6667V5.00008L15 1.66675H5Z" stroke="#45556C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M2.5 5H17.5" stroke="#45556C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3333 8.33325C13.3333 9.21731 12.9821 10.0652 12.357 10.6903C11.7319 11.3154 10.884 11.6666 9.99996 11.6666C9.1159 11.6666 8.26806 11.3154 7.64294 10.6903C7.01782 10.0652 6.66663 9.21731 6.66663 8.33325" stroke="#45556C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button className="topbar__icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8.55664 17.5C8.70293 17.7533 8.91332 17.9637 9.16668 18.11C9.42003 18.2563 9.70743 18.3333 9.99997 18.3333C10.2925 18.3333 10.5799 18.2563 10.8333 18.11C11.0866 17.9637 11.297 17.7533 11.4433 17.5" stroke="#45556C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M2.71833 12.7717C2.60947 12.8911 2.53763 13.0394 2.51155 13.1988C2.48547 13.3582 2.50627 13.5218 2.57142 13.6696C2.63658 13.8174 2.74328 13.943 2.87855 14.0313C3.01381 14.1196 3.17182 14.1666 3.33333 14.1667H16.6667C16.8282 14.1668 16.9862 14.1199 17.1216 14.0318C17.2569 13.9437 17.3637 13.8182 17.4291 13.6705C17.4944 13.5228 17.5154 13.3593 17.4895 13.1999C17.4637 13.0405 17.392 12.892 17.2833 12.7726C16.175 11.6301 15 10.4159 15 6.66675C15 5.34067 14.4732 4.0689 13.5355 3.13121C12.5979 2.19353 11.3261 1.66675 10 1.66675C8.67392 1.66675 7.40215 2.19353 6.46447 3.13121C5.52679 4.0689 5 5.34067 5 6.66675C5 10.4159 3.82417 11.6301 2.71833 12.7717Z" stroke="#45556C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className="badge" />
        </button>
        <button className="topbar__profile">
          <div className="topbar__avatar">P</div>
          Profile
        </button>
      </div>
    </div>
  );
}
