package com.thesis.innmanagement.config.entity;

import org.springframework.context.annotation.Lazy;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@Lazy(value = false)
@MappedSuperclass
public abstract class BasicEntity implements Serializable, HasId {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName()).append('{');
        sb.append("id=").append(getId());
        return sb.append('}').toString();
    }
}
