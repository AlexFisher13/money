import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class AppTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        month: ['Январь', 'Февраль', 'Март',
        'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        days: [17, 19, 20, 21, 20, 20, 22, 23, 20, 23, 21, 21],
        visible: false
    }
  }



     render() {
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
                this.state.month.map((month,i) =>
                  <TableRow key={i}>
                    <TableCell numeric>{this.state.month[i]}</TableCell>
                    <TableCell numeric>{this.state.days[i]}</TableCell>
                    <TableCell numeric>{this.state.days[i]*8}</TableCell>
                    <TableCell numeric>{this.state.days[i]*8*this.props.payment}</TableCell>
                  </TableRow>
                )
              }
          </TableBody>
        </Table>
      </div>
    )
  }
}
export default AppTable;
