import React from 'react'
import { Card, CardContent, Tab } from '@mui/material'
import { Box } from '@mui/system'
import Basic from './Basic/index'
import Currency from './Currency/index'
import { TabContext, TabList, TabPanel } from '@mui/lab'

export default function Calculator() {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        maxWidth: '94%',
        width: '400px',
        textAlign: 'center',
        borderRadius: '50px',
        background: 'primary.dark',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Card>
        <CardContent>
          <TabContext value={value}>
            <TabList onChange={handleChange} centered>
              <Tab label="Basic" value="1" />
              <Tab label="Currency" value="2" />
            </TabList>
            <TabPanel value="1">
              <Basic />
            </TabPanel>
            <TabPanel value="2">
              <Currency />
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </Box>
  )
}
