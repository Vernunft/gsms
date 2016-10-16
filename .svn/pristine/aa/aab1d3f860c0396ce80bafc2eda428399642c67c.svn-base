package net.evecom.gsms.controller;

import net.evecom.gsms.entity.DeptEntity;
import net.evecom.gsms.service.DeptService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by Warren on 2016/9/5.
 */
@Controller
@RequestMapping("/dept")
public class DeptController {
    private static Logger LOGGER = LoggerFactory.getLogger(DeptController.class);

    @Autowired
    private  DeptService deptService;

    @RequestMapping("/showDeptInfo/{deptno}")
    public String showDeptInfo(ModelMap mp, @PathVariable Long deptno){
        LOGGER.info("查询机构："+ deptno);
        DeptEntity deptInfo = deptService.getByDeptno(deptno);
        //String deptInfo = "测试部";
        System.out.println(deptInfo);
        mp.addAttribute("deptInfo",deptInfo);
        return "/dept/showDeptInfo";
    }

}
