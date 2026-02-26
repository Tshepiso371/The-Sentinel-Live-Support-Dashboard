function DashboardLayout({children}){
    return (
        <div>
            <header>
                <h1>Sentinel IT Dashboard</h1>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default DashboardLayout;