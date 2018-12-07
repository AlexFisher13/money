import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import days from '../data/days.js'

export const AppTable = () => {
     return (
      <div>
       <Table>
        <TableHead>
          <TableRow>
            <TableCell numeric>Месяц</TableCell>
            <TableCell numeric>Количество дней</TableCell>
            <TableCell numeric>Количество часов</TableCell>
            <TableCell numeric>Зарплата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              days.month.map((month,i) =>
                <TableRow key={i}>
                  <TableCell numeric>{days.month[i]}</TableCell>
                  <TableCell numeric>{days.days[i]}</TableCell>
                  <TableCell numeric>{days.days[i]*8}</TableCell>
                  <TableCell numeric>???</TableCell>
                </TableRow>
              )
            }
        </TableBody>
      </Table>
    </div>
  )
}
