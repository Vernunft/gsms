/*
 * Copyright (c) 2005, 2016, EVECOM Technology Co.,Ltd. All rights reserved.
 * EVECOM PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 */
package net.evecom.gsms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.evecom.gsms.dao.DataListDao;
import net.evecom.gsms.entity.DataListEntity;
import net.evecom.gsms.utils.DTO;
import org.apache.xml.resolver.apps.resolver;
import org.kohsuke.rngom.digested.DTextPattern;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import net.evecom.gsms.service.DataListService;

import javax.servlet.http.HttpServletRequest;

/**
 * 描述 数据展示控制层
 *
 * @author Icey Li
 * @created 2016年10月2日 上午12:09:57
 */
@Controller
@RequestMapping("/dataListController")
public class DataListController {

    private static Logger LOGGER = LoggerFactory.getLogger(DataListController.class);
    @Autowired
    DataListService dataListService;
    @Autowired
    DataListDao dao;

    /**
     * 描述 获得单位总数
     *
     * @return
     * @author Icey Li
     * @created 2016年10月2日 下午2:25:30
     */
    @RequestMapping("/getDeptCount")
    @ResponseBody
    public Map<String, Object> getDeptCount(HttpServletRequest request) throws Exception {
        int deptCount = dataListService.getDeptCount();
        LOGGER.info("deptCount:" + deptCount);
        Map<String, Object> map = new HashMap<>();
        map.put("deptCount", deptCount);
        request.setAttribute("session", request.getSession().getId());
        System.out.println(request.getAttribute("session"));
        return map;
    }

    /**
     * 描述 获取资源项
     *
     * @return
     * @author Icey Li
     * @created 2016年10月2日 下午2:30:29
     */
    @RequestMapping("/getItemCount")
    @ResponseBody
    public Map<String, Object> getItemCount() throws Exception {
        int itemCount = dataListService.getItemCount();
        LOGGER.info("itemCount:" + itemCount);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("itemCount", itemCount);
        return map;
    }

    /**
     * 描述 获取资源总量
     *
     * @return
     * @author Icey Li
     * @created 2016年10月2日 下午2:30:29
     */
    @RequestMapping("/getTotalCount")
    @ResponseBody
    public Map<String, Object> getTotalCount() throws Exception {
        double totalCount = dataListService.getTotalCount();
        LOGGER.info("totalCount:" + totalCount);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("totalCount", totalCount);
        return map;
    }

    /**
     * 描述 获取已有数据列表
     *
     * @return
     * @author Icey Li
     * @created 2016年10月2日 下午2:30:29
     */
    @RequestMapping("/getAll")
    @ResponseBody
    public List<DTO> getAll() throws Exception {
        List<DTO> dataLists = dataListService.getAll();
        LOGGER.info("已有数据列表" + dataLists.toArray());
        return dataLists;
    }

    /**
     * 描述 按高低顺序获取类别列表
     *
     * @return
     * @author Icey Li
     * @created 2016年10月2日 下午2:30:29
     */
    @RequestMapping("/getItemList")
    @ResponseBody
    public List<DTO> getItemList() throws Exception {
        List<DTO> list = dataListService.getItemList();
        LOGGER.info("类别列表" + list.toArray());
        return list;
    }


    /**
     * 描述 抛出异常测试
     *
     * @return
     * @author Icey Li
     * @created 2016年10月2日 下午2:30:29
     */
    @RequestMapping("/getError")
    @ResponseBody
    public Throwable getError() throws Exception {
        RuntimeException runtimeException = new RuntimeException();
       return  runtimeException;
    }

}
