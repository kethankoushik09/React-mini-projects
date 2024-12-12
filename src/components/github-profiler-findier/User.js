import "./style.css";
export default function User({user}){
    const {avatar_url,followers,following,public_repos,url,login,name,created_at} = user;
    console.log(name);
    
    console.log(user);
    console.log(avatar_url);
    const createddate = new Date(created_at);
    
    
    return(
        <>
            <div className="user">
                <div>
                    <img src={`${avatar_url}`} alt="user" className="avatar" />
                </div>
                <div className="name-conatiner">
                    <a href={`https://api.github.com/users/${login}`}>{name}</a>
                    <h3>user joined on {`${createddate.getDate()} ${createddate.toLocaleString("en-us", {
                        month: "short",})} ${createddate.getFullYear()}`}</h3>
                </div>
                <div className="profile-info">
                    <div>
                        <p>Public Repos</p>
                        <p>{public_repos}</p>
                    </div>
                    <div>
                        <p>Followers</p>
                        <p>{followers}</p>
                    </div>
                    <div>
                        <p>Following</p>
                        <p>{following}</p>
                    </div>
                </div>
            </div>
            <h1>{public_repos}</h1>
        </>
    )

}