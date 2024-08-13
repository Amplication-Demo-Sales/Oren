/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ActivityService } from "../activity.service";
import { ActivityCreateInput } from "./ActivityCreateInput";
import { Activity } from "./Activity";
import { ActivityFindManyArgs } from "./ActivityFindManyArgs";
import { ActivityWhereUniqueInput } from "./ActivityWhereUniqueInput";
import { ActivityUpdateInput } from "./ActivityUpdateInput";

export class ActivityControllerBase {
  constructor(protected readonly service: ActivityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Activity })
  async createActivity(
    @common.Body() data: ActivityCreateInput
  ): Promise<Activity> {
    return await this.service.createActivity({
      data: {
        ...data,

        contact: data.contact
          ? {
              connect: data.contact,
            }
          : undefined,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,
      },
      select: {
        contact: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        date: true,
        description: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Activity] })
  @ApiNestedQuery(ActivityFindManyArgs)
  async activities(@common.Req() request: Request): Promise<Activity[]> {
    const args = plainToClass(ActivityFindManyArgs, request.query);
    return this.service.activities({
      ...args,
      select: {
        contact: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        date: true,
        description: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Activity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async activity(
    @common.Param() params: ActivityWhereUniqueInput
  ): Promise<Activity | null> {
    const result = await this.service.activity({
      where: params,
      select: {
        contact: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        date: true,
        description: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Activity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateActivity(
    @common.Param() params: ActivityWhereUniqueInput,
    @common.Body() data: ActivityUpdateInput
  ): Promise<Activity | null> {
    try {
      return await this.service.updateActivity({
        where: params,
        data: {
          ...data,

          contact: data.contact
            ? {
                connect: data.contact,
              }
            : undefined,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,
        },
        select: {
          contact: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          date: true,
          description: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Activity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteActivity(
    @common.Param() params: ActivityWhereUniqueInput
  ): Promise<Activity | null> {
    try {
      return await this.service.deleteActivity({
        where: params,
        select: {
          contact: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          date: true,
          description: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
