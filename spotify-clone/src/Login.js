import './Login.css'
import { loginUrl } from './spotfy'

const Login = ()=>{
    return(
        <div className='login'>
            <img src="https://kreafolk.com/cdn/shop/articles/BlogThumbnail_751d3381-21a8-49d0-bf12-ca7f83b205f6.jpg?v=1692901525&width=2048" alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
export default Login