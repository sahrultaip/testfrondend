import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { tableOptions } from '../Commons/Table/TableOptions';

class Table extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<div class="card">
					<div class="card-body">
						<BootstrapTable striped hover pagination version='4'
							search={true}
							options={tableOptions}
							wrapperClasses="table-responsive"
						>
							<TableHeaderColumn width='150' row='0' rowSpan='2' dataField='id' isKey>ID</TableHeaderColumn>
							<TableHeaderColumn width='150' row='0' colSpan='3' dataSort csvHeader='Product' headerAlign='right'>Product</TableHeaderColumn>
							<TableHeaderColumn width='150' row='1' dataField='price' dataSort>price</TableHeaderColumn>
							<TableHeaderColumn width='150' row='0' csvHeader='In stock' rowSpan='2' dataField='status'>In stock</TableHeaderColumn>
							<TableHeaderColumn width='150' row='0' colSpan='2' csvHeader='Customer' filter={{ type: 'TextFilter', delay: 1000 }}>Customer</TableHeaderColumn>
							<TableHeaderColumn width='150' row='1' csvHeader='name' dataField='customer'>name</TableHeaderColumn>
							<TableHeaderColumn width='150' row='1' csvHeader='order' dataField='order' dataSort>order</TableHeaderColumn>
						</BootstrapTable>
					</div>
				</div>
			</div>
		);
	}
}

export default Table;