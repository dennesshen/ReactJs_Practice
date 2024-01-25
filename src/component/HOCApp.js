
//機密組件
function SecureComponent() {
    return <div>機密文件</div>;
}

//高階組件
function withAdmin(WrappedComponent) {
    return function EnhanceSecureComponent({isAdmin, ...props}){

        const today = new Date();
        const renderDateAndCopyRight = () => <div>日期:{today.toLocaleTimeString()} <p /> 版權所有....</div>

        //根據isAdmin屬性進行條件渲染
        return (
            <>
                {
                    isAdmin ? (
                        <WrappedComponent {...props} />
                    ) : (
                        <div>這是一般內容</div>
                    )
                }
                {renderDateAndCopyRight()}
            </>
        )
    }
}

//利用 HOC 模式
const EnhanceSecureComponent = withAdmin(SecureComponent);

function HocApp() {
    const isAdmin = true;
    return <EnhanceSecureComponent isAdmin={isAdmin}/>;
}

export default HocApp;