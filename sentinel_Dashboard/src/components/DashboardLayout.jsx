function DashboardLayout({children}){
    return (
        <div>
            <header>
                <h1>Sentinel Dashboard</h1>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default DashboardLayout;