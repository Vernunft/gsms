/*
 * Copyright (c) 2005, 2016, EVECOM Technology Co.,Ltd. All rights reserved.
 * EVECOM PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 */
package net.evecom.gsms.dao;

import net.evecom.gsms.utils.DTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import net.evecom.gsms.entity.DataListEntity;

import java.util.List;

/**
 * 描述 数据展示的dao层
 * 
 * @author Icey Li
 * @created 2016年10月1日 下午11:59:50
 */
public interface DataListDao extends JpaRepository<DataListEntity, String>, JpaSpecificationExecutor<DataListEntity> {
    /**
     *
     * 描述 获取当前单位的总数
     * 
     * @author Icey Li
     * @created 2016年10月2日 下午2:43:09
     * @return
     */
    @Query(value = "select count(d.deptName) from DataListEntity  d")
    public int getDeptCount();

    /**
     * 
     * 描述 获取当前资源总项
     * 
     * @author Icey Li
     * @created 2016年10月2日 下午2:43:41
     * @return
     */
    @Query(value = "select sum(itemCount) from DataListEntity")
    public int getItemCount();

    /**
     * 
     * 描述 获取数据总量
     * 
     * @author Icey Li
     * @created 2016年10月2日 下午2:44:44
     * @return
     */
    @Query(value = "select sum(totalCount) from DataListEntity")
    public int getTotalCount();

    /**
     * 
     * 描述 各厅局列表
     * 
     * @author Icey Li
     * @created 2016年10月14日 下午3:51:38
     * @return
     */
    @Query(value = "select d from DataListEntity d order by totalCount desc")
    public List<DataListEntity> getAll();

    /**
     * 
     * 描述 获取按资源项排列的数据列表
     * 
     * @author Icey Li
     * @created 2016年10月14日 下午3:52:28
     * @return
     */
    @Query(value = "select d from DataListEntity d order by itemCount desc")
    public List<DataListEntity> getItemList();
}
