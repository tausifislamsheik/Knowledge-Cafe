import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between my-10 pb-5 border-b border-b-slate-300 items-center'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </div>
        
    );
};

export default Header;