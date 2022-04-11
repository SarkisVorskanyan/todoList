import React, { FC, useState } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { DateType } from '../models/ListType';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckedType } from '../models/CheckedType';

interface TaskListProps {
  dateList: DateType[],
  checkTask: (checkObj: CheckedType) => void,
  deleteTask: (deleteObj: CheckedType) => void
}



const TaskList: FC <TaskListProps> = ({dateList, checkTask, deleteTask}) => {

    const [open, setOpen] = useState<number>(1000)

    const handleClick = (id: number) => {
      if(open === id){
        setOpen(1000)
      }else{
        setOpen(id)
      }
    }

    return (
      <Box>
        {dateList.map((item, i) => 
          <List
            sx={{ width: '80%', padding: '0 40px', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            key={i}
        >
        <ListItemButton onClick={() => handleClick(i)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={`${item.date} (${item.list.length})`} />
          {open === i ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {item.list.map((listItem, indexList) => 
          <Collapse in={open === i} timeout="auto" unmountOnExit>
            <ListItem secondaryAction={
              <ListItemButton onClick={() => deleteTask({
                date: item.date,
                task_id: listItem.list_id
              })}>
                <DeleteIcon />
              </ListItemButton>
            }>
               <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                  <Checkbox
                      checked={listItem.completed}
                      onChange={(e) => checkTask({
                        date: item.date,
                        task_id: listItem.list_id,
                        checked: e.target.checked
                      })}
              />
                  </ListItemIcon>
                  <ListItemText sx={{textDecoration: listItem.completed ? 'line-through' : ''}} primary={listItem.content} />
              </ListItemButton>
            </ListItem>
          </Collapse>
        )}
      </List>
        )}
      </Box>
    )
}

export default TaskList