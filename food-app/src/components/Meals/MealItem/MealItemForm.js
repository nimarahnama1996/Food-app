import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';


const MealItemForm = (props) => {

    return(
        <form className={classes.form}> 
            <Input 
            label='Amount'
            input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'7',
                step:'0',
                defaultValue:'0',
            }}   
            />
            <button>Add</button>
        </form>
    );

};




export default MealItemForm