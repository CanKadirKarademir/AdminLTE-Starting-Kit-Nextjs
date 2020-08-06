import '../../../public/assets/css/stylesAdmin.scss'
import { Header } from './header'
import { Sidebar, ControlSidebar } from './sidebar'
import { Content } from './content'
import { Footer } from './footer'
import PropTypes from 'prop-types'
import { Component } from 'react'
import Head from 'next/head'

export class AdminLayout extends Component {
    render() {
        return <html>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js" integrity="sha512-M+hXwltZ3+0nFQJiVke7pqXY7VdtWW2jVG31zrml+eteTP7im25FdwtLhIBTWkaHRQyPrhO2uy8glLMHZzhFog==" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />

                <link rel="stylesheet" href="https://adminlte.io/themes/v3/plugins/fontawesome-free/css/all.min.css" />
                <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                <link rel="stylesheet" href="https://adminlte.io/themes/v3/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
                <link rel="stylesheet" href="https://adminlte.io/themes/v3/dist/css/adminlte.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
                <script src="/assets/js/adminlte.min.js" />
            </Head>

            {this.props.layoutNone ? <body className={this.props.className}>
                {this.props.children}
            </body> : <body className={"sidebar-mini" + this.props.className}>
                    <div className="wrapper">
                        <Header />
                        <Sidebar />
                        <Content title={this.props.contentTitle} titleButton={this.props.contentTitleButton}>
                            {this.props.children}
                        </Content>
                        <ControlSidebar />
                        <Footer rightContent={<div><b>Version:</b>1.0.0</div>} leftContent={'Copyright © 2020 Unit Zero All rights reserved.'} />
                    </div>
                </body>}
        </html>
    }
}

AdminLayout.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
    className: PropTypes.string,
    layoutType: PropTypes.bool
};

AdminLayout.propTypes = {
    layoutNone: false,
    className: null,
    contentTitle: null,
    contentTitleButton: null
}