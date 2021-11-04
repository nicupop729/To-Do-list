
import { changeState, checkBox, tasks } from './change-state'

describe('test change state', ()=>{
    test('should change state', () => {
        checkBox[1].checked = true;
        changeState();
       
        expect(tasks[1].completed).toBe(true);
    })
    
})