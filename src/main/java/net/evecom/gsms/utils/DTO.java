/*
 * Copyright (c) 2005, 2016, EVECOM Technology Co.,Ltd. All rights reserved.
 * EVECOM PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 */
package net.evecom.gsms.utils;

import java.util.Date;

/**
 * 描述 自定义的数据传输对象
 * 
 * @author Icey Li
 * @created 2016年10月2日 下午10:46:55
 */
public class DTO {
    /**
     * 厅局名称
     */
    private String deptName;
    /**
     * 类别数
     */
    private Integer itemCount;
    /**
     * 总数据量
     */
    private Integer totalCount;
    /**
     * 各厅局的图标
     */
    private String iconClass;
    /**
     * 更新时间
     */
    private Date updateTime;
    /**
     * 格式化数字
     */
    private String totalFormat;
    /**
     * 颜色样式
     */
    private String color;

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public Integer getItemCount() {
        return itemCount;
    }

    public void setItemCount(Integer itemCount) {
        this.itemCount = itemCount;
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public String getIconClass() {
        return iconClass;
    }

    public void setIconClass(String iconClass) {
        this.iconClass = iconClass;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getTotalFormat() {
        return totalFormat;
    }

    public void setTotalFormat(String totalFormat) {
        this.totalFormat = totalFormat;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public DTO() {

    }
}
