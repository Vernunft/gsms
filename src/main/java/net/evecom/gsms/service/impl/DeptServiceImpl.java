package net.evecom.gsms.service.impl;

import net.evecom.gsms.dao.DeptDao;
import net.evecom.gsms.entity.DeptEntity;
import net.evecom.gsms.service.DeptService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Warren on 2016/9/5.
 */
@Service
public class DeptServiceImpl implements DeptService {
    @Autowired
    private DeptDao deptDao;

    @Transactional
    @Override
    public DeptEntity getByDeptno(Long deptno){
        return deptDao.getByDeptno(deptno);
    }
}
