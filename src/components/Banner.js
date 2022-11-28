import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommandation from './Recommandation'
function Banner(){
    const title = 'La maison jungle'

    return (
        <div className='lmj-banner'>
            <div className='lmj-banner-row'> 
                <img src={ logo } alt='La maison jngle' className='lmj-logo' />
                <h1 className="lmj-title">{ title }</h1>
            </div>
            <div>{<Recommandation />}</div>
        </div>
        
        
    )
}

export default Banner