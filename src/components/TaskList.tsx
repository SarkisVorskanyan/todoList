import React, { FC, useEffect, useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { DateType } from '../models/ListType';
import Box from '@mui/material/Box';

interface TaskListProps {
  dateList: DateType[]
}



const TaskList: FC <TaskListProps> = ({dateList}) => {

    const [open, setOpen] = useState<number>(1000);

    const handleClick = (id: number) => {
        setOpen(id);
      };

      useEffect(() => {
        console.log(open)
      }, [open])
    

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
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={listItem.content} />
            </ListItemButton>
          </List>
        </Collapse>
        )}
      </List>
        )}
      </Box>
    )
}

export default TaskList