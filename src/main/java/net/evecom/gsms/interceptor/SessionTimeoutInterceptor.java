package net.evecom.gsms.interceptor;

import net.evecom.gsms.controller.DataListController;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * 描述 session拦截器
 *
 * @author Icey Li
 * @created 2016年10月2日 下午10:46:55
 */
public class SessionTimeoutInterceptor extends HttpServlet implements Filter {


    private static Logger log = LoggerFactory.getLogger(SessionTimeoutInterceptor.class);

    private static final long serialVersionUID = 1L;

    public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain arg2) throws IOException, ServletException {
        log.info("执行过滤");
        HttpServletRequest request = (HttpServletRequest) arg0;
        HttpServletResponse response = (HttpServletResponse) arg1;
        HttpSession session = request.getSession();
        if (session!=null) {
            if (session.isNew()){
                return;
            }
            if (session.getId()==null) {
                response.sendRedirect(request.getContextPath() + "/views/error/timeOut.jsp");
                return;
            } else {
                arg2.doFilter(arg0, arg1);
                return;

            }
        }

    }

    public void init(FilterConfig arg0) throws ServletException {
    }

}
