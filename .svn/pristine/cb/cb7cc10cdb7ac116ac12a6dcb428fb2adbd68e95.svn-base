package net.evecom.gsms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import net.evecom.gsms.entity.DeptEntity;

/**
 * Created by Warren on 2016/9/5.
 */
public interface DeptDao extends JpaRepository<DeptEntity,Long>,
        JpaSpecificationExecutor<DeptEntity> {
    DeptEntity getByDeptno(Long deptno);
}
