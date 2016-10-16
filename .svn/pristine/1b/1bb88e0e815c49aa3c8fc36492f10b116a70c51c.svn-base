/*
 * Copyright (c) 2005, 2016, EVECOM Technology Co.,Ltd. All rights reserved.
 * EVECOM PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 */
package net.evecom.gsms.entity;

import org.hibernate.annotations.GenericGenerator;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * 描述 数据实体
 * 
 * @author Icey Li
 * @created 2016年10月14日 下午3:57:46
 */
@Entity
@Table(name = "FJGSMS_DATA_STATISTICS", schema = "gsms", catalog = "")
public class DataListEntity {
    /**
     * 主键id
     */
    private String id;
    /**
     * 厅局名称
     */
    private String deptName;
    /**
     * 厅局代号
     */
    private String deptCode;
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
     * 显示顺序
     */
    private Integer viewOrder;
    /**
     * 更新时间
     */
    private Date updateTime;

    @Id
    @Column(name = "ID")
    @GenericGenerator(name = "idGenerator", strategy = "uuid")
    @GeneratedValue(generator = "idGenerator")
    public String getId() {
        return id;
    }

    @Basic
    @Column(name = "dept_name")
    public String getDeptName() {
        return deptName;
    }

    @Basic
    @Column(name = "dept_code")
    public String getDeptCode() {
        return deptCode;
    }

    @Basic
    @Column(name = "item_count")
    public Integer getItemCount() {
        return itemCount;
    }

    @Basic
    @Column(name = "total_count")
    public Integer getTotalCount() {
        return totalCount;
    }

    @Basic
    @Column(name = "Icon_class")
    public String getIconClass() {
        return iconClass;
    }

    @Basic
    @Column(name = "view_order")
    public Integer getViewOrder() {
        return viewOrder;
    }

    @Basic
    @Column(name = "update_time")
    public Date getUpdateTime() {
        return updateTime;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public void setDeptCode(String deptCode) {
        this.deptCode = deptCode;
    }

    public void setItemCount(Integer itemCount) {
        this.itemCount = itemCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public void setIconClass(String iconClass) {
        this.iconClass = iconClass;
    }

    public void setViewOrder(Integer viewOrder) {
        this.viewOrder = viewOrder;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        DataListEntity that = (DataListEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(deptName, that.deptName)
                && Objects.equals(deptCode, that.deptCode) && Objects.equals(itemCount, that.itemCount)
                && Objects.equals(totalCount, that.totalCount) && Objects.equals(iconClass, that.iconClass)
                && Objects.equals(viewOrder, that.viewOrder) && Objects.equals(updateTime, that.updateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, deptName, deptCode, itemCount, totalCount, iconClass, viewOrder, updateTime);
    }

    public DataListEntity() {
    }

    @Override
    public String toString() {
        return "DataListEntity{" + "id='" + id + '\'' + ", deptName='" + deptName + '\'' + ", deptCode='" + deptCode
                + '\'' + ", itemCount=" + itemCount + ", totalCount=" + totalCount + ", iconClass='" + iconClass + '\''
                + ", viewOrder=" + viewOrder + ", updateTime=" + updateTime + '}';
    }
}
