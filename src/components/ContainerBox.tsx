const ContainerBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-4xl mx-auto px-4">
            {children}
        </div>
    )
}

export { ContainerBox as default }; 