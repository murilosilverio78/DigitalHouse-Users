import './styles.css'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

export default function Pagination(props) {
    return(
        <div className="pagination">
            <button
                className= "pagination-arrows"  
                type="button" disabled={props.page===1} onClick={() => props.onPageChange(props.page - 1)}> 
                <MdNavigateBefore size={24}/>
            </button>
            <span>Página {props.page}</span>
            <button  
                className= "pagination-arrows"
                type="button" onClick={() => props.onPageChange(props.page + 1)}>
                <MdNavigateNext size={24}/>
            </button>
        </div>
    )
}
 