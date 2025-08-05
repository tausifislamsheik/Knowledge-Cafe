import profile from '../../assets/images/profile.png'
const Header = ({toggleTheme}) => {
    return (
        <div className='flex justify-between pt-10 pb-5 border-b border-b-slate-300 items-center'>
            <h1 className="text-2xl lg:text-4xl font-bold">Knowledge Cafe</h1>
            <div className='flex items-center gap-5'>
                 <label class="flex cursor-pointer gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input onClick={toggleTheme} type="checkbox" value="synthwave" class="toggle theme-controller" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
            <img className='w-10 lg:w-14' src={profile} alt="" />
            </div>
        </div>
        
    );
};

export default Header;