import { OrbitProgress } from 'react-loading-indicators';
import './loader.css';

function Loader() {
    return (
        <div className="loading">
            <OrbitProgress color="lightblue" size="large" text="" textColor="" className="loading" />
        </div>
    );
}
export default Loader;
