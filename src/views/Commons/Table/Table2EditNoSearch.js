import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

const Table2EditNoSearch = (props) => {


    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
          Total <b>{ size }</b>
        </span>
      );
      
      const options = {
        paginationSize: 4,
        pageStartIndex: 1,
        alwaysShowAllBtns: false, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: '<<',
        prePageText: '<',
        nextPageText: '>',
        lastPageText: '>>',
        // nextPageTitle: 'First page',
        // prePageTitle: 'Pre page',
        // firstPageTitle: 'Next page',
        // lastPageTitle: 'Last page',
        showTotal: false,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: 'All', value: props.datas.length
        }]
      };

    return(
        <div>
            <ToolkitProvider
                    keyField="id"
                    data={ props.datas }
                    columns={ props.tableHead }
                    caption={ props.caption }
                >
                    {
                        (props) => (
                            <div>
                                <BootstrapTable 
                                    { ...props.baseProps }
                                    striped
                                    hover
                                    condensed
                                    wrapperClasses="table-responsive"
                                    pagination={ paginationFactory(options) }
                                />
                            </div>
                        )
                    }
            </ToolkitProvider>
        </div>
    )
}

export default Table2EditNoSearch